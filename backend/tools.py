from orders import get_order_status_and_tracking_link


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
        }
    ]


def call_function(name: str, args: dict) -> str:
    if name == "get_order_status_and_tracking_link":
        return get_order_status_and_tracking_link(**args)

    raise ValueError(f"Function {name} not found")
