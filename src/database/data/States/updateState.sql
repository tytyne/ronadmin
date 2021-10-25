UPDATE dbo.States
SET [Statename]=@Statename
     
WHERE [StateID]=@Id

SELECT  [Statename]
             
 FROM dbo.States
 WHERE [StateID]=@Id

 