package main

import (
	"fmt"
	"io"
	"net/http"
	"os"
)

func main() {
	city := ""
	if len(os.Args) > 1 {
		city = os.Args[1]
	}

	url := fmt.Sprintf("https://wttr.in/%s?format=3", city)

	resp, err := http.Get(url)
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error fetching weather: %v\n", err)
		os.Exit(1)
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		fmt.Fprintf(os.Stderr, "Error: received status code %d\n", resp.StatusCode)
		os.Exit(1)
	}

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error reading response body: %v\n", err)
		os.Exit(1)
	}

	fmt.Println(string(body))
}
