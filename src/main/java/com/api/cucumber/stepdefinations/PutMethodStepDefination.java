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

public class PutMethodStepDefination {
	
	private RestModal restModel;
	private String id;
	
	public PutMethodStepDefination(RestModal restModel){
		this.restModel=restModel;
	}
	
	@When("^I perform PUT request with Id \"([^\"]*)\" and update Brand name as \"([^\"]*)\" , Features as \"([^\"]*)\" , LaptopName as \"([^\"]*)\"$")
	public void i_perform_PUT_request_with_Id_and_update_Brand_name_as_Features_as_LaptopName_as(String Id, String brandname, String feature, String laptopName) throws Throwable {
	    id = restModel.response.thenReturn().jsonPath().getString("Id");
	    String body =  RestUtil.getJsonBody(brandname, Integer.parseInt(id),laptopName,Arrays.asList(feature.split(",")));
		restModel.response = restModel.requestSpecification.body(body).put("http://localhost:8081/laptop-bag/webapi/api/update");
	}
	@Then("^Details Should get Updated$")
	public void details_Should_get_Updated() throws Throwable {
		// String body =  RestUtil.getJsonBody(brandname, null,laptopName,Arrays.asList(feature.split(",")));
		//restModel.response = restModel.requestSpecification.body(body).post("http://localhost:8081/laptop-bag/webapi/api/update");
		System.out.println("Final Response :::: "+restModel.response.asString());
	}
}
