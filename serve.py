#!/usr/bin/env python3
import http.server, socketserver, os
os.chdir(os.path.dirname(os.path.abspath(__file__)))
class H(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()
PORT = 8802
with socketserver.TCPServer(("", PORT), H) as httpd:
    print(f"serving improve-quiz on http://localhost:{PORT}")
    httpd.serve_forever()
