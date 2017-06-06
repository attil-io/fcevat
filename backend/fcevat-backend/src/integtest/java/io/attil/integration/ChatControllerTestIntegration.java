package io.attil.integration;

import org.junit.Before;
import org.junit.Test;

import io.restassured.RestAssured;
import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.equalTo;

public class ChatControllerTestIntegration {

	@Before
	public void setup() {
		RestAssured.baseURI = "http://172.17.0.2:8080/fcevat";
	}
	
	@Test
	public void testAllMessages() {
		expect()
			.statusCode(200)
			.body(equalTo("[{\"text\":\"hello\"},{\"text\":\"world\"}]"))
		.given()
		.when().get("/messages");
	}
}
