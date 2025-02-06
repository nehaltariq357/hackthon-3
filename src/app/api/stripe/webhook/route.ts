import { NextResponse } from "next/server";
import Stripe from "stripe";
import { client } from "../../../../sanity/lib/client"; 

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2025-01-27.acacia", 
});

export async function POST(request: Request) {
  const payload = await request.text();
  const sig = request.headers.get("stripe-signature");

  if (!sig || !process.env.STRIPE_WEBHOOK_SECRET) {
    return new NextResponse("Missing signature or secret", { status: 400 });
  }

  try {
    
    const event = stripe.webhooks.constructEvent(
      payload,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );

    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session;

      // Save order to Sanity
      await client.create({
        _type: "order",
        stripeSessionId: session.id,
        customerEmail: session.customer_email,
        amountTotal: (session.amount_total || 0) / 100, 
        status: "paid",
      });

      return new NextResponse("Order saved to Sanity", { status: 200 });
    }

    return new NextResponse("Event received", { status: 200 });
  } catch (error) {
    console.error("Webhook error:", error);
    return new NextResponse("Webhook error", { status: 400 });
  }
}
