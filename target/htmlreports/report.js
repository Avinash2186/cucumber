$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("GetFeatureFile.feature");
formatter.feature({
  "line": 1,
  "name": "Title of your feature",
  "description": "I want to use this template for my feature file",
  "id": "title-of-your-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 335200,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Title of your scenario",
  "description": "",
  "id": "title-of-your-feature;title-of-your-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I want to write a step with precondition",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "some other precondition",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I complete action",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "some other action",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "yet another action",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I validate the outcomes",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "check more outcomes",
  "keyword": "And "
});
formatter.match({
  "location": "GetFeatureFileStepDefination.i_want_to_write_a_step_with_precondition()"
});
formatter.result({
  "duration": 154908500,
  "status": "passed"
});
formatter.match({
  "location": "GetFeatureFileStepDefination.some_other_precondition()"
});
formatter.result({
  "duration": 111000,
  "status": "passed"
});
formatter.match({
  "location": "GetFeatureFileStepDefination.i_complete_action()"
});
formatter.result({
  "duration": 79700,
  "status": "passed"
});
formatter.match({
  "location": "GetFeatureFileStepDefination.some_other_action()"
});
formatter.result({
  "duration": 68400,
  "status": "passed"
});
formatter.match({
  "location": "GetFeatureFileStepDefination.yet_another_action()"
});
formatter.result({
  "duration": 199000,
  "status": "passed"
});
formatter.match({
  "location": "GetFeatureFileStepDefination.i_validate_the_outcomes()"
});
formatter.result({
  "duration": 2321300,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat com.api.cucumber.stepdefinations.GetFeatureFileStepDefination.i_validate_the_outcomes(GetFeatureFileStepDefination.java:47)\r\n\tat ✽.Then I validate the outcomes(GetFeatureFile.feature:11)\r\n",
  "status": "pending"
});
formatter.match({
  "location": "GetFeatureFileStepDefination.check_more_outcomes()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 395300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "Title of your scenario outline",
  "description": "",
  "id": "title-of-your-feature;title-of-your-scenario-outline",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I want to write a step with \u003cname\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I check for the \u003cvalue\u003e in step",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I verify the \u003cstatus\u003e in step",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "title-of-your-feature;title-of-your-scenario-outline;",
  "rows": [
    {
      "cells": [
        "name",
        "value",
        "status"
      ],
      "line": 21,
      "id": "title-of-your-feature;title-of-your-scenario-outline;;1"
    },
    {
      "cells": [
        "name1",
        "5",
        "success"
      ],
      "line": 22,
      "id": "title-of-your-feature;title-of-your-scenario-outline;;2"
    },
    {
      "cells": [
        "name2",
        "7",
        "Fail"
      ],
      "line": 23,
      "id": "title-of-your-feature;title-of-your-scenario-outline;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 114500,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Title of your scenario outline",
  "description": "",
  "id": "title-of-your-feature;title-of-your-scenario-outline;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I want to write a step with name1",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I check for the 5 in step",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I verify the success in step",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 32
    }
  ],
  "location": "GetFeatureFileStepDefination.i_want_to_write_a_step_with_name(int)"
});
formatter.result({
  "duration": 3807500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 16
    }
  ],
  "location": "GetFeatureFileStepDefination.i_check_for_the_in_step(int)"
});
formatter.result({
  "duration": 155300,
  "status": "passed"
});
formatter.match({
  "location": "GetFeatureFileStepDefination.i_verify_the_success_in_step()"
});
formatter.result({
  "duration": 234500,
  "status": "passed"
});
formatter.after({
  "duration": 105600,
  "status": "passed"
});
formatter.before({
  "duration": 169300,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Title of your scenario outline",
  "description": "",
  "id": "title-of-your-feature;title-of-your-scenario-outline;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I want to write a step with name2",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I check for the 7 in step",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I verify the Fail in step",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 32
    }
  ],
  "location": "GetFeatureFileStepDefination.i_want_to_write_a_step_with_name(int)"
});
formatter.result({
  "duration": 361000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 16
    }
  ],
  "location": "GetFeatureFileStepDefination.i_check_for_the_in_step(int)"
});
formatter.result({
  "duration": 164900,
  "status": "passed"
});
formatter.match({
  "location": "GetFeatureFileStepDefination.i_verify_the_Fail_in_step()"
});
formatter.result({
  "duration": 159200,
  "status": "passed"
});
formatter.after({
  "duration": 100100,
  "status": "passed"
});
formatter.uri("PostMethod.feature");
formatter.feature({
  "line": 1,
  "name": "Add a laptop in laptop bag",
  "description": "",
  "id": "add-a-laptop-in-laptop-bag",
  "keyword": "Feature"
});
formatter.before({
  "duration": 221100,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Add details",
  "description": "",
  "id": "add-a-laptop-in-laptop-bag;add-details",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@functional"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Accept Content in Json Format",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Content type as Json",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I perform Post request with Brand name as \"Dell\" , Features as \"8 GB RAM , 1 TB Hard Drive\",LaptopName as \"Latitude\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Status code \"200\" should returned",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Response should have Integer Id",
  "keyword": "And "
});
formatter.match({
  "location": "PostMethodStepDefination.accept_Content_in_Json_Format()"
});
formatter.result({
  "duration": 1357985700,
  "status": "passed"
});
formatter.match({
  "location": "PostMethodStepDefination.content_type_as_Json()"
});
formatter.result({
  "duration": 5350600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dell",
      "offset": 43
    },
    {
      "val": "8 GB RAM , 1 TB Hard Drive",
      "offset": 64
    },
    {
      "val": "Latitude",
      "offset": 107
    }
  ],
  "location": "PostMethodStepDefination.i_perform_Post_request_with_Brand_name_as_Features_as_LaptopName_as(String,String,String)"
});
formatter.result({
  "duration": 1887505700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 13
    }
  ],
  "location": "PostMethodStepDefination.status_code_should_returned(String)"
});
formatter.result({
  "duration": 217320400,
  "status": "passed"
});
formatter.match({
  "location": "PostMethodStepDefination.response_should_have_Integer_Id()"
});
formatter.result({
  "duration": 1216015000,
  "status": "passed"
});
formatter.after({
  "duration": 227400,
  "status": "passed"
});
formatter.uri("PostMethodInvalid.feature");
formatter.feature({
  "line": 1,
  "name": "Try to add laptop in laptop bag with Invalid body",
  "description": "",
  "id": "try-to-add-laptop-in-laptop-bag-with-invalid-body",
  "keyword": "Feature"
});
formatter.before({
  "duration": 209700,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Post details with invalid body",
  "description": "",
  "id": "try-to-add-laptop-in-laptop-bag-with-invalid-body;post-details-with-invalid-body",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@functional"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Accept Content in Json Format",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Content type as Json",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I supply invalid json body",
  "keyword": "But "
});
formatter.step({
  "line": 8,
  "name": "i perform Post request Status code \"400\" should returned",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Status code \"400\" should returned",
  "keyword": "Then "
});
formatter.match({
  "location": "PostMethodStepDefination.accept_Content_in_Json_Format()"
});
formatter.result({
  "duration": 977400,
  "status": "passed"
});
formatter.match({
  "location": "PostMethodStepDefination.content_type_as_Json()"
});
formatter.result({
  "duration": 1386000,
  "status": "passed"
});
formatter.match({
  "location": "PostMethodStepDefination.i_supply_invalid_json_body()"
});
formatter.uri("PutMethod.feature");
formatter.feature({
  "line": 1,
  "name": "Update a laptop information in laptop bag",
  "description": "",
  "id": "update-a-laptop-information-in-laptop-bag",
  "keyword": "Feature"
});
formatter.before({
  "duration": 295000,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Post ad Then Update Details of Laptop",
  "description": "",
  "id": "update-a-laptop-information-in-laptop-bag;post-ad-then-update-details-of-laptop",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@functional"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Accept Content in Json Format",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Content type as Json",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I perform Post request with Brand name as \"Delloo\" , Features as \"6 GB RAM , 5 TB Hard Drive\",LaptopName as \"Funcky Latitude\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Status code \"200\" should returned",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Response should have Integer Id",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I perform PUT request with Id \"\" and update Brand name as \"Dell\" , Features as \"3 GB RAM , 7 TB Hard Driver\" , LaptopName as \"Speedo\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Status code \"200\" should returned",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Details Should get Updated",
  "keyword": "And "
});
});