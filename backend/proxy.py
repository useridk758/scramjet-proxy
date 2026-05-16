from flask import Flask, request, Response
import requests

app = Flask(__name__)

@app.route("/<path:url>")
def proxy(url):
    target_url = request.url.replace(request.host_url, "")
    try:
        res = requests.get(target_url, headers={"User-Agent": "Mozilla/5.0"})
        return Response(res.content, mimetype=res.headers.get("Content-Type"))
    except Exception as e:
        return f"Error: {str(e)}", 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8080)
