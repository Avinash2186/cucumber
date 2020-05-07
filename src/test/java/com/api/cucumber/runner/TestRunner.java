package com.api.cucumber.runner;

import cucumber.api.CucumberOptions;
import org.junit.runner.RunWith;

import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/main/java/com/api/cucumber/featurefile",
        glue = {"com.api.cucumber.stepdefinations"},
        monochrome = true,
        strict = true,
        
       /* plugin = { "pretty", "html:target/htmlreports" }*/
        plugin = {"pretty", "html:target/test/htmlreports",
        		"json:target/cucumber.json",
        		"junit:target/cucumber.xml"},
        tags = {"@functional1"}

        		)

	
	
public class TestRunner {

}
