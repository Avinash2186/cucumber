$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("POST.feature");
formatter.feature({
  "line": 1,
  "name": "Add a laptop in laptop bag",
  "description": "",
  "id": "add-a-laptop-in-laptop-bag",
  "keyword": "Feature"
});
formatter.before({
  "duration": 357900,
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
  "duration": 1134487100,
  "status": "passed"
});
formatter.match({
  "location": "PostMethodStepDefination.content_type_as_Json()"
});
formatter.result({
  "duration": 6110700,
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
  "duration": 2011790300,
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
  "duration": 574046200,
  "status": "passed"
});
formatter.match({
  "location": "PostMethodStepDefination.response_should_have_Integer_Id()"
});
formatter.result({
  "duration": 1179874300,
  "status": "passed"
});
formatter.after({
  "duration": 472700,
  "status": "passed"
});
formatter.before({
  "duration": 365900,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Scene Changed in POST",
  "description": "",
  "id": "add-a-laptop-in-laptop-bag;scene-changed-in-post",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@functional"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "Accept Content in Json Format",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "Content type as Json",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I perform Post request with Brand name as \"Dell\" , Features as \"10 GB RAM , 1 TB Hard Drive\",LaptopName as \"Latitude\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Status code \"200\" should returned",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Response should have Integer Id",
  "keyword": "And "
});
formatter.match({
  "location": "PostMethodStepDefination.accept_Content_in_Json_Format()"
});
formatter.result({
  "duration": 955200,
  "status": "passed"
});
formatter.match({
  "location": "PostMethodStepDefination.content_type_as_Json()"
});
formatter.result({
  "duration": 1174600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dell",
      "offset": 43
    },
    {
      "val": "10 GB RAM , 1 TB Hard Drive",
      "offset": 64
    },
    {
      "val": "Latitude",
      "offset": 108
    }
  ],
  "location": "PostMethodStepDefination.i_perform_Post_request_with_Brand_name_as_Features_as_LaptopName_as(String,String,String)"
});
formatter.result({
  "duration": 37539500,
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
  "duration": 2000800,
  "status": "passed"
});
formatter.match({
  "location": "PostMethodStepDefination.response_should_have_Integer_Id()"
});
formatter.result({
  "duration": 47515800,
  "status": "passed"
});
formatter.after({
  "duration": 180300,
  "status": "passed"
});
formatter.uri("POST_INVALID.feature");
formatter.feature({
  "line": 1,
  "name": "Try to add laptop in laptop bag with Invalid body",
  "description": "",
  "id": "try-to-add-laptop-in-laptop-bag-with-invalid-body",
  "keyword": "Feature"
});
formatter.before({
  "duration": 760000,
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
  "duration": 805800,
  "status": "passed"
});
formatter.match({
  "location": "PostMethodStepDefination.content_type_as_Json()"
});
formatter.result({
  "duration": 1150000,
  "status": "passed"
});
formatter.match({
  "location": "PostMethodStepDefination.i_supply_invalid_json_body()"
});
formatter.uri("PUT.feature");
formatter.feature({
  "line": 1,
  "name": "Update a laptop information in laptop bag",
  "description": "",
  "id": "update-a-laptop-information-in-laptop-bag",
  "keyword": "Feature"
});
formatter.before({
  "duration": 215700,
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
  "name": "I perform Post request with Brand name as \"Delight\" , Features as \"6 GB RAM , 5 TB Hard Drive\",LaptopName as \"Funcky Latitude\"",
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
formatter.uri("ZZZ.feature");
formatter.feature({
  "line": 1,
  "name": "ZZZ FEature File",
  "description": "",
  "id": "zzz-feature-file",
  "keyword": "Feature"
});
formatter.before({
  "duration": 288000,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Post ad Then Update Details of Laptop",
  "description": "",
  "id": "zzz-feature-file;post-ad-then-update-details-of-laptop",
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
  "name": "I perform Post request with Brand name as \"Delighted\" , Features as \"2 GB RAM , 5 TB Hard Drive\",LaptopName as \"Funcky Latitude\"",
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
  "name": "I perform PUT request with Id \"\" and update Brand name as \"Dell\" , Features as \"1 GB RAM , 7 TB Hard Driver\" , LaptopName as \"Speedo\"",
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