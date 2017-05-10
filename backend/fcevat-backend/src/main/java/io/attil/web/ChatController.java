package io.attil.web;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.attil.domain.Message;

@RestController
public class ChatController {

	@RequestMapping("/messages")
	public List<Message> getMessages() {
		List<Message> ret = new ArrayList<>();
		Message msg = new Message();
		msg.setText("hello");
		ret.add(msg);
		ret.add(msg);
		ret.add(msg);
		ret.add(msg);
		ret.add(msg);
		return ret;
	}
}
