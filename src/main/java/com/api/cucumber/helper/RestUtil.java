package com.api.cucumber.helper;

import java.util.List;

import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

public class RestUtil {
	
	private static final String BRANDNAME="BrandName";
	private static final String FEATURES="Features";
	private static final String FEATURE="Feature";
	private static final String _Id="Id";
	private static final String LAPTOPNAME="LaptopName";
	
	private static int getRandomId() {
		int random = (int) (1000*(Math.random()));
		System.out.println("id is ::::"+random);
		return random;
	}
	
	public static String getJsonBody(String brandName ,Integer id,String laptopaName,List<String> feature ) {
		System.out.println("branname::::"+brandName);
		System.out.println("Laptop name :::"+laptopaName);
		System.out.println("FEatures::::"+feature);
		JsonObject jsonObject = new JsonObject();
		jsonObject.addProperty(BRANDNAME, brandName);
		jsonObject.addProperty(_Id,id == null ? getRandomId()+"" : id+ "");
		//System.out.println("id value :::"+id);
		
		JsonObject featureObject = new JsonObject();
		JsonArray array = getJsonArray(feature);
		
		featureObject.add(FEATURE, array);
		jsonObject.add(FEATURES, featureObject);
		jsonObject.addProperty(LAPTOPNAME, laptopaName);
		
		
		return jsonObject.toString();
	}

	private static JsonArray getJsonArray(List<String> feature) {
		JsonArray array = new JsonArray();
		
		for (String jsonElement : feature) {
			array.add(jsonElement);
		}
		return array;
	}
	
}
