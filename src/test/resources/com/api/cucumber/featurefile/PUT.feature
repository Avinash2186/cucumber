Feature:  Update a laptop information in laptop bag

@functional
Scenario: Post ad Then Update Details of Laptop
    Given Accept Content in Json Format
    And Content type as Json
    When I perform Post request with Brand name as "Delight" , Features as "6 GB RAM , 5 TB Hard Drive",LaptopName as "Funcky Latitude"
    Then Status code "200" should returned
    And Response should have Integer Id
    When I perform PUT request with Id "" and update Brand name as "Dell" , Features as "3 GB RAM , 7 TB Hard Driver" , LaptopName as "Speedo"
    Then Status code "200" should returned
    And Details Should get Updated 
    
@functional
Scenario: To Test Why PUT Not workig in FEature File
    Given Accept Content in Json Format
    And Content type as Json
    But I supply invalid json body
    When i perform Post request Status code "400" should returned
    Then Status code "400" should returned
    
    
