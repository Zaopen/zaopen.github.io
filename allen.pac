function FindProxyForURL(url, host) {
	return "DIRECT; SOCKS5 192.168.1.254:8082; SOCKS 192.168.1.254:8082";
}