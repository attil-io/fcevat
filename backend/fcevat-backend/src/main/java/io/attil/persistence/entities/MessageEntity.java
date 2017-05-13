package io.attil.persistence.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class MessageEntity {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	private String text;
	
	public MessageEntity(String text) {
		this.text = text;
	}

	@Override
	public String toString() {
		return "MessageEntity [id=" + id + ", text=" + text + "]";
	}
	
}
