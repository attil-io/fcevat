package io.attil.web;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.LinkedList;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import io.attil.config.PersistenceContext;
import io.attil.config.WebConfiguration;
import io.attil.domain.Message;
import io.attil.service.ChatService;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = { WebConfiguration.class, PersistenceContext.class })
@WebAppConfiguration
public class ChatControllerTest {

	@Mock private ChatService chatService;

	@InjectMocks private ChatController chatController;

	@Before public void setup() { 
		MockitoAnnotations.initMocks(this); 
	}

	@Test public void testMessages() throws Exception { 
		MockMvc mockMvc = MockMvcBuilders.standaloneSetup(chatController).build();
		when(chatService.getMessages()).thenReturn(new LinkedList<Message>(){{
				add(new Message(1L, "hello, world")); }});
		mockMvc.perform(get("/messages")).andExpect(status().isOk()).andExpect(content().json("[{\"text\":\"hello, world\"}]"));
	}
	
	@Test public void testWrite() throws Exception {
		MockMvc mockMvc = MockMvcBuilders.standaloneSetup(chatController).build();
		mockMvc.perform(post("/write").content("hello, world")).andExpect(status().isOk());
	}

}
