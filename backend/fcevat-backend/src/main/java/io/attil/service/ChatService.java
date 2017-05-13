package io.attil.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import io.attil.domain.Message;
import io.attil.persistence.repository.MessagesRepository;

@Service
public class ChatService {

	@Autowired
	private MessagesRepository messagesRepository;
	
	public List<Message> getMessages() {
		List<Message> ret = new ArrayList<>();
		Message msg = new Message("hello");
		ret.add(msg);
		ret.add(msg);
		ret.add(msg);
		ret.add(msg);
		ret.add(msg);
		return ret;
	}
}
