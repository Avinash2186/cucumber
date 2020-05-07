Feature:  Try to add laptop in laptop bag with Invalid body

@functional
Scenario: Post details with invalid body
    Given Accept Content in Json Format
    And Content type as Json
    But I supply invalid json body
    When i perform Post request Status code "400" should returned
    Then Status code "400" should returned