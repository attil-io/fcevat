package io.attil.web;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/welcome")
public class WelcomeController {

	@RequestMapping
	public String welcome(Model model) {
		model.addAttribute("user", "bob");
		return "welcome";
	}
}
