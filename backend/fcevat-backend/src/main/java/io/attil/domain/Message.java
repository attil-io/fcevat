package io.attil.domain;

public class Message {

	private String text;

	public Message(String text) {
		setText(text);
	}
	
	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}
	
}
