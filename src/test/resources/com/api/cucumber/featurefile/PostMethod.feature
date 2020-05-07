Feature:  Add a laptop in laptop bag

@functional
Scenario: Add details
    Given Accept Content in Json Format
    And Content type as Json
    When I perform Post request with Brand name as "Dell" , Features as "8 GB RAM , 1 TB Hard Drive",LaptopName as "Latitude"
    Then Status code "200" should returned
    And Response should have Integer Id
    
    
