from .orders import get_order_status_and_tracking_link
from .promotions import check_time, give_early_riser_discount


def get_available_tools():
    return [
        {
            "type": "function",
            "function": {
                "name": "get_order_status_and_tracking_link",
                "description": "Get the order status and tracking link of an order by email and order number.",
                "parameters": {
                    "type": "object",
                    "properties": {
                        "email": {"type": "string"},
                        "order_number": {"type": "string"},
                    },
                    "required": ["email", "order_number"],
                    "additionalProperties": False,
                },
                "strict": True,
            },
        },
        {
            "type": "function",
            "function": {
                "name": "check_time",
                "description": "Check the current time in the US/Pacific timezone.",
                "parameters": {
                    "type": "object",
                    "properties": {},
                    "required": [],
                    "additionalProperties": False,
                },
                "strict": True,
            },
        },
        {
            "type": "function",
            "function": {
                "name": "give_early_riser_discount",
                "description": "Give an Early Risers Promotion of 10% off during the hours of 8:00 - 10:00 in Pacific Time. You must check the current time in the US/Pacific timezone before giving the discount. Only give the discount if the current time is between 8:00 and 10:00 in Pacific Time.",
                "parameters": {
                    "type": "object",
                    "properties": {},
                    "required": [],
                    "additionalProperties": False,
                },
                "strict": True,
            },
        },
    ]


def call_function(name: str, args: dict) -> str:
    if name == "get_order_status_and_tracking_link":
        return get_order_status_and_tracking_link(**args)
    elif name == "check_time":
        return check_time()
    elif name == "give_early_riser_discount":
        return give_early_riser_discount()

    raise ValueError(f"Function {name} not found")
