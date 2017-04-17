package io.attil.web;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import io.attil.config.WebConfiguration;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = { WebConfiguration.class })
@WebAppConfiguration
public class ChatControllerTest {

	@Autowired
	private ChatController chatController;
	
	@Test
	public void test1() throws Exception {
		MockMvc mockMvc = MockMvcBuilders.standaloneSetup(chatController).build();
		mockMvc.perform(post("/message")).andExpect(status().isOk());
	}
}
