package io.attil.web;

import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.attil.domain.Message;
import io.attil.service.ChatService;

@RestController
public class ChatController {

	@Autowired
	private ChatService chatService;
	
	@CrossOrigin
	@RequestMapping(value="/messages", produces="application/json", method=GET)
	public List<Message> getMessages() {
		List<Message> messages = chatService.getMessages();
		return messages;
	}
	
	@CrossOrigin
	@RequestMapping(value="/write", method=POST)
	public void write() {
		System.out.println("XXX WRITE!");
	}
}
