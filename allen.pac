function FindProxyForURL(url, host) {
	if (isInNet(host, "192.168.1.0", "255.255.255.0"))
		return "DIRECT";
	return "SOCKS5 192.168.1.254:8082; SOCKS 192.168.1.254:8082";
}