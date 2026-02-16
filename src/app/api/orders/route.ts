import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const phone = searchParams.get("phone");

        if (!phone) {
            return NextResponse.json({ success: false, message: "Phone number is required" }, { status: 400 });
        }

        const filePath = path.join(process.cwd(), "src", "data", "orders.json");

        if (!fs.existsSync(filePath)) {
            return NextResponse.json([]);
        }

        const fileContent = fs.readFileSync(filePath, "utf-8");
        const orders = JSON.parse(fileContent);

        // Filter orders by phone number
        const filteredOrders = orders.filter((order: any) =>
            order.customer && order.customer.phone === phone
        );

        return NextResponse.json(filteredOrders);
    } catch (error) {
        console.error("Error fetching orders:", error);
        return NextResponse.json(
            { success: false, message: "Failed to fetch orders" },
            { status: 500 }
        );
    }
}

export async function POST(req: Request) {
    try {
        const orderData = await req.json();
        const filePath = path.join(process.cwd(), "src", "data", "orders.json");

        // Read existing orders
        let orders = [];
        if (fs.existsSync(filePath)) {
            const fileContent = fs.readFileSync(filePath, "utf-8");
            orders = JSON.parse(fileContent);
        }

        // Add new order
        orders.push(orderData);

        // Save back to file
        fs.writeFileSync(filePath, JSON.stringify(orders, null, 2));

        return NextResponse.json({ success: true, message: "Order saved successfully" });
    } catch (error) {
        console.error("Error saving order:", error);
        return NextResponse.json(
            { success: false, message: "Failed to save order" },
            { status: 500 }
        );
    }
}
