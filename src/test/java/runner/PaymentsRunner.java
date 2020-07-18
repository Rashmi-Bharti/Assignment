package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		plugin = {"progress",
	            "html:build/report/html",
	            "junit:build/report/junit/cucumber-report.xml",
	            "json:build/report/json/cucumber-report.json"
	    },
		
		features="C://Users//R//eclipse-workspace//Assignment//src//test//java//features//sccessScenario.feature" //the path of the feature file
		,glue= {"stepDefination"},//the path of the Step definition file
		monochrome= true, //display the console output in a proper readable format
		strict= true, //it will check if any step is not defined in step definition file
		dryRun= false  //to check the mapping is proper between feature file and step def file
		
		)

public class PaymentsRunner {
	
	}
