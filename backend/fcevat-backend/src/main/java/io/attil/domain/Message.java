package io.attil.domain;

public class Message {

	private Long id;
	private String text;

	public Message(Long id, String text) {
		setId(id);
		setText(text);
	}
	
	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
}
