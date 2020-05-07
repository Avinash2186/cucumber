package com.api.cucumber.runner;

import cucumber.api.CucumberOptions;

import java.io.File;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import com.cucumber.listener.Reporter;

import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/resources/com/api/cucumber/featurefile",
        glue = {"com.api.cucumber.stepdefinations","com.api.cucumber.hooks"},
        monochrome = true,
        strict = true,
        dryRun = false,
       /* plugin = { "pretty", "html:target/htmlreports" }*/
        plugin = {"com.cucumber.listener.ExtentCucumberFormatter:target/cucumber-reports/report.html",
        		"pretty", "html:target/htmlreports",
        		"json:target/cucumber.json",
        		"junit:target/cucumber.xml"}
       // tags = {"@functional"}

        		)

	
	
public class PostMethodRunnerTest {
	
	@AfterClass
    public static void writeExtentReport() {
        Reporter.loadXMLConfig(new File("config/report.xml"));
    
    }

}
