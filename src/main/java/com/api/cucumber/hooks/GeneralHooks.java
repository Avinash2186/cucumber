package com.api.cucumber.hooks;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class GeneralHooks {
	
	@Before
	public void setUp() {
		System.out.println("Before Scenario of cucumber. HOOKS......");
	}
	
	@After
	public void tearDown() {
		System.out.println("After Scenario of cucumber...HOOKS....");
	}

}
