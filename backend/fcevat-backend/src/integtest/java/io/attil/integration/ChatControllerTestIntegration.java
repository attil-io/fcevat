package io.attil.integration;

import static io.restassured.RestAssured.expect;
import static org.hamcrest.Matchers.equalTo;

import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

import org.junit.Before;
import org.junit.Test;

import io.restassured.RestAssured;

public class ChatControllerTestIntegration {

	@Before
	public void setup() throws IOException {
		Properties prop = new Properties();
		ClassLoader loader = Thread.currentThread().getContextClassLoader();
		InputStream stream = loader.getResourceAsStream("integtest.properties");
		prop.load(stream);
		RestAssured.baseURI = prop.getProperty("baseUri");
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
