package com.api.cucumber.stepdefinations;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.And;
import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;

import java.util.Arrays;

import com.api.cucumber.helper.RestModal;
import com.api.cucumber.helper.RestUtil;
import com.sun.xml.bind.v2.runtime.unmarshaller.XsiNilLoader.Array;

public class PostMethodStepDefination {
	
	/*
	 * private RequestSpecification requestSpecification; private Response response;
	 */
	private RestModal restModel;
	private String invalidJsonBody;
	
	public PostMethodStepDefination(RestModal restModel){
		this.restModel=restModel;
	}
	
	@Given("^Accept Content in Json Format$")
	public void accept_Content_in_Json_Format() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		restModel.requestSpecification = given().accept(ContentType.JSON);
	}

	@Given("^Content type as Json$")
	public void content_type_as_Json() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		restModel.requestSpecification.contentType(ContentType.JSON);
	}

	@When("^I perform Post request with Brand name as \"([^\"]*)\" , Features as \"([^\"]*)\",LaptopName as \"([^\"]*)\"$")
	public void i_perform_Post_request_with_Brand_name_as_Features_as_LaptopName_as(String brandname, String feature, String laptopName) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	  String body =  RestUtil.getJsonBody(brandname, null,laptopName,Arrays.asList(feature.split(",")));
	  restModel.response = restModel.requestSpecification.body(body).post("http://localhost:8081/laptop-bag/webapi/api/add");
	}

	@Then("^Status code \"([^\"]*)\" should returned$")
	public void status_code_should_returned(String statusCode) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("response:::::::::::"+restModel.response.body().prettyPrint());
		restModel.response.then().assertThat().statusCode(Integer.parseInt(statusCode));
	}

	@Then("^Response should have Integer Id$")
	public void response_should_have_Integer_Id() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	  // response.then().assertThat().body("Id", is(Integer.class));
		JsonPath jsonPath = restModel.response.jsonPath();
		System.out.println("Get Id from reponse:::"+jsonPath.getInt("Id"));
		
	}
	
	@Given("^I supply invalid json body$")
	public void i_supply_invalid_json_body() throws Throwable {
	    invalidJsonBody="invalid body here....";
	}

	@When("^i perform Post request Status code \"([^\"]*)\" should returned$")
	public void i_perform_Post_request_Status_code_should_returned(String statusCode) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		restModel.response = requestSpecification.body(invalidJsonBody).post("http://localhost:8081/laptop-bag/webapi/api/add");
		 //response.then().assertThat().statusCode(Integer.parseInt(statusCode));
	}
}
