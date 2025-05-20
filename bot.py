import requests
from telegram import Update
from telegram.ext import Updater, MessageHandler, Filters, CallbackContext

# Ganti dengan token bot Telegram Anda
BOT_TOKEN = '7777571176:AAEG0Bc1ZeGj4F8s8j9WwxpGM7jOKJ5b7zo'

# Ganti dengan API key TMDb Anda
TMDB_API_KEY = 'c542b4951cfcd4ca4e97f3184f866b70'

def search_movie(title):
    url = "https://api.themoviedb.org/3/search/movie"
    params = {
        'api_key': TMDB_API_KEY,
        'query': title,
        'language': 'id-ID'
    }
    response = requests.get(url, params=params)
    data = response.json()
    if data.get('results'):
        movie = data['results'][0]
        return {
            'title': movie.get('title', 'N/A'),
            'release_date': movie.get('release_date', 'N/A'),
            'overview': movie.get('overview', 'Tidak ada deskripsi'),
            'id': movie.get('id')
        }
    else:
        return None

def get_watch_link(title):
    base_url = "https://cinenest16.blogspot.com/search?q="
    query = title.replace(' ', '+')
    return base_url + query

def handle_message(update: Update, context: CallbackContext):
    text = update.message.text
    if text.startswith('!s '):
        judul = text[3:].strip()
        movie = search_movie(judul)
        if movie:
            link = get_watch_link(movie['title'])
            response = (
                f"Film ditemukan:\n"
                f"Judul: {movie['title']}\n"
                f"Tanggal Rilis: {movie['release_date']}\n"
                f"Deskripsi: {movie['overview']}\n\n"
                f"Link nonton: {link}"
            )
        else:
            response = f"Maaf, film dengan judul '{judul}' tidak ditemukan."
        update.message.reply_text(response)
    else:
        update.message.reply_text("Perintah tidak dikenali. Ketik !s judulnya")

def main():
    updater = Updater(BOT_TOKEN, use_context=True)
    dp = updater.dispatcher

    dp.add_handler(MessageHandler(Filters.text & ~Filters.command, handle_message))

    print("Bot berjalan...")
    updater.start_polling()
    updater.idle()

if __name__ == '__main__':
    main()
