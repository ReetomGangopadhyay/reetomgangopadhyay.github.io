from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from functools import partial
from socket import AF_INET6


class NoCacheHandler(SimpleHTTPRequestHandler):
    def do_GET(self):
        for name in ("If-Modified-Since", "If-None-Match"):
            if name in self.headers:
                del self.headers[name]
        super().do_GET()

    def end_headers(self):
        self.send_header("Cache-Control", "no-store, max-age=0")
        super().end_headers()


class Server(ThreadingHTTPServer):
    address_family = AF_INET6


if __name__ == "__main__":
    handler = partial(NoCacheHandler, directory="dist")
    Server(("::", 4321), handler).serve_forever()
