package io.attil.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import io.attil.domain.Message;

@Service
public class ChatService {

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
