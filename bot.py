import asyncio
import logging
import sys
from aiogram import Bot, Dispatcher
from aiogram.client.default import DefaultBotProperties
from aiogram.enums import ParseMode
from aiogram.filters import CommandStart
from aiogram.types import Message, WebAppInfo
from aiogram.utils.keyboard import InlineKeyboardBuilder

# Bot token can be obtained via https://t.me/BotFather
TOKEN = '6533483936:AAGeV90UCv6fvp0ZXEHGTT8Dmoey0pc-ErI'

# All handlers should be attached to the Router (or Dispatcher)
dp = Dispatcher()


def web_app_builder(url: str = "https://davidik76.github.io/DCoin1/", text: str = 'Clicker') -> InlineKeyboardBuilder:
    builder = InlineKeyboardBuilder()
    builder.button(text=text, web_app=WebAppInfo(url=url))
    return builder.as_markup()


@dp.message(CommandStart())
async def command_start_handler(message: Message) -> None:
    """
    This handler receives messages with `/start` command
    """
    await message.answer(
        f"Clicker", reply_markup=web_app_builder("https://davidik76.github.io/DCoin1/", 'Clicker')
    )


@dp.message()
async def echo_handler(message: Message) -> None:
    await message.answer("Nice try!")


async def main() -> None:
    # Initialize Bot instance with default bot properties which will be passed to all API calls
    bot = Bot(token=TOKEN, default=DefaultBotProperties(
        parse_mode=ParseMode.HTML))
    # And the run events dispatching
    await dp.start_polling(bot)


if __name__ == "__main__":
    logging.basicConfig(level=logging.INFO, stream=sys.stdout)
    asyncio.run(main())
