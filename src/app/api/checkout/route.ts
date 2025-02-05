import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2025-01-27.acacia",
});

interface CartItem {
  title: string;
  image: string;
  price: number;
  quantity: number;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

  
    const { cartItems }: { cartItems: CartItem[] } = body;

    const lineItems = cartItems.map((item) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.title,
          images: [item.image], 
        },
        unit_amount: item.price * 100, 
      },
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_URL}/checkout/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_URL}/checkout/cancel`, 
    });

    return NextResponse.json({ url: session.url });
  } catch (err: unknown) {
    
    if (err instanceof Error) {
      console.error(err.message);
      return new NextResponse(err.message, { status: 500 });
    }

    
    console.error("Unexpected error", err);
    return new NextResponse("An unexpected error occurred", { status: 500 });
  }
}
