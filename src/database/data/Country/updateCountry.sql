UPDATE dbo.Country
SET [CountryName]=@CountryName], 
WHERE [id]=@id

SELECT  [CountryName],
FROM dbo.Country
WHERE [id]=@id