Feature:  ZZZ FEature File

@functional
Scenario: Post ad Then Update Details of Laptop
    Given Accept Content in Json Format
    And Content type as Json
    When I perform Post request with Brand name as "Delighted" , Features as "2 GB RAM , 5 TB Hard Drive",LaptopName as "Funcky Latitude"
    Then Status code "200" should returned
    And Response should have Integer Id
    When I perform PUT request with Id "" and update Brand name as "Dell" , Features as "1 GB RAM , 7 TB Hard Driver" , LaptopName as "Speedo"
    Then Status code "200" should returned
    And Details Should get Updated 
    
    
@functional
Scenario: Scene Changed in ZZZ
    Given Accept Content in Json Format
    And Content type as Json
    When I perform Post request with Brand name as "AMAZON" , Features as "10 GB RAM , 1 TB Hard Drive",LaptopName as "Latitude"
    Then Status code "200" should returned
    And Response should have Integer Id