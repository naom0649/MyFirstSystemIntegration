from flask import Flask, Response, render_template
import time

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/stream')
def stream():
    def event_stream():
        while True:
            yield f"data: {time.ctime()}\n\n"
            time.sleep(1)  # Simulate a delay
    return Response(event_stream(), content_type='text/event-stream')

if __name__ == '__main__':
    app.run(debug=True)