package io.attil.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import io.attil.domain.Message;
import io.attil.persistence.entities.MessageEntity;
import io.attil.persistence.repository.MessagesRepository;

@Service
public class ChatService {

	@Autowired
	private MessagesRepository messagesRepository;
	
	public List<Message> getMessages() {
		Iterable<MessageEntity> messageEntities = messagesRepository.findAll();
		List<Message> ret = new ArrayList<>();
		for (MessageEntity me: messageEntities) {
			Message msg = new Message(me.text);
			ret.add(msg);
		}
		return ret;
	}
}
