<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:msxsl="urn:schemas-microsoft-com:xslt" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:my="http://schemas.microsoft.com/office/infopath/2003/myXSD/2020-10-27T07:28:52" xmlns:xd="http://schemas.microsoft.com/office/infopath/2003" version="1.0">
	<xsl:output encoding="UTF-8" method="xml"/>
	<xsl:template match="/">
		<xsl:copy-of select="processing-instruction() | comment()"/>
		<xsl:choose>
			<xsl:when test="my:DEMO">
				<xsl:apply-templates select="my:DEMO" mode="_0"/>
			</xsl:when>
			<xsl:otherwise>
				<xsl:variable name="var">
					<xsl:element name="my:DEMO"/>
				</xsl:variable>
				<xsl:apply-templates select="msxsl:node-set($var)/*" mode="_0"/>
			</xsl:otherwise>
		</xsl:choose>
	</xsl:template>
	<xsl:template match="my:A1List" mode="_2">
		<xsl:copy>
			<xsl:element name="my:fieldA1">
				<xsl:copy-of select="my:fieldA1/text()[1]"/>
			</xsl:element>
		</xsl:copy>
	</xsl:template>
	<xsl:template match="my:groupA1List" mode="_1">
		<xsl:copy>
			<xsl:choose>
				<xsl:when test="my:A1List">
					<xsl:apply-templates select="my:A1List" mode="_2"/>
				</xsl:when>
				<xsl:otherwise>
					<xsl:variable name="var">
						<xsl:element name="my:A1List"/>
					</xsl:variable>
					<xsl:apply-templates select="msxsl:node-set($var)/*" mode="_2"/>
				</xsl:otherwise>
			</xsl:choose>
		</xsl:copy>
	</xsl:template>
	<xsl:template match="my:DEMO" mode="_0">
		<xsl:copy>
			<xsl:choose>
				<xsl:when test="my:groupA1List">
					<xsl:apply-templates select="my:groupA1List[1]" mode="_1"/>
				</xsl:when>
				<xsl:otherwise>
					<xsl:variable name="var">
						<xsl:element name="my:groupA1List"/>
					</xsl:variable>
					<xsl:apply-templates select="msxsl:node-set($var)/*" mode="_1"/>
				</xsl:otherwise>
			</xsl:choose>
		</xsl:copy>
	</xsl:template>
</xsl:stylesheet>