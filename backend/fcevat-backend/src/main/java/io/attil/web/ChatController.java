package io.attil.web;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.attil.domain.Message;

@RestController
public class ChatController {

	@RequestMapping("/message")
	public Message getMessage() {
		Message msg = new Message();
		msg.setText("hello");
		return msg;
	}
}
