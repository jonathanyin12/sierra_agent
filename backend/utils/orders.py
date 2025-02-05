import json

CUSTOMER_ORDERS = json.load(open("customer_orders.json"))


def get_tracking_link(tracking_number: str):
    """
    Get the tracking link for a given tracking number
    """
    return f"https://tools.usps.com/go/TrackConfirmAction?tLabels={tracking_number}"


def get_order(email: str, order_number: str):
    """
    Get the order details by email and order number
    """
    email = email.lower()  # normalize email
    order_number = order_number.upper()  # normalize order number
    for order in CUSTOMER_ORDERS:
        if order["Email"] == email and order["OrderNumber"] == order_number:
            return order
    return None


def get_order_status_and_tracking_link(email: str, order_number: str) -> str:
    """
    Get the order status and tracking link of an order by email and order number
    """
    order = get_order(email, order_number)
    if order is None:
        return "No order found matching the email and order number."

    order_status = order["Status"]
    tracking_number = order["TrackingNumber"]
    tracking_link = get_tracking_link(tracking_number)

    return f"Order status: {order_status}\nTracking link: {tracking_link}"
