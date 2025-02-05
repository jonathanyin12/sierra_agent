import random
import string
from datetime import datetime
from zoneinfo import ZoneInfo


def give_early_riser_discount():
    """
    Give a 10% discount code to users during the hours of 8:00 - 10:00
    in Pacific Time.
    """

    current_time = datetime.now(tz=ZoneInfo("US/Pacific"))
    current_hour = current_time.hour

    if not (8 <= current_hour < 10):
        return f"The Early Risers Promotion is only available between 8:00 and 10:00 Pacific Time. It is currently {current_time.strftime('%H:%M')}, so you do not have permission to give the discount."

    random_string = "".join(random.choices(string.ascii_letters, k=6))

    return f"10% off discount code: EARLYRISER10_{random_string.upper()}"


def check_time():
    """
    Check the current time in the US/Pacific timezone.
    """
    return f"The current time in the US/Pacific timezone is {datetime.now(tz=ZoneInfo('US/Pacific')).strftime('%H:%M')}"
