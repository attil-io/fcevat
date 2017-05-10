package io.attil.web;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.attil.domain.Message;
import io.attil.service.ChatService;

@RestController
public class ChatController {

	@Autowired
	private ChatService chatService;
	
	@RequestMapping("/messages")
	public List<Message> getMessages() {
		return chatService.getMessages();
	}
}
