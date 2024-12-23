const fs = require('fs');
const path = require('path');
const AdmZip = require('adm-zip');
const xml2js = require('xml2js');
const { expect } = require('chai');
const sinon = require('sinon');
const { parseXSN } = require('./extractXsn');
import fs from 'fs';
import path from 'path';
import AdmZip from 'adm-zip';
import xml2js from 'xml2js';
import { expect } from 'chai';
import sinon from 'sinon';
import { parseXSN } from './extractXsn';

describe('parseXSN', () => {
    const xsnFilePath = path.join(__dirname, 'template', 'default', 'DEMO.xsn');
    const outputDir = path.join(__dirname, 'out');
    const templateFilePath = path.join(outputDir, 'template.xml');
    const manifestFilePath = path.join(outputDir, 'manifest.xsf');

    beforeEach(() => {
        sinon.stub(fs, 'existsSync').returns(false);
        sinon.stub(fs, 'mkdirSync');
        sinon.stub(AdmZip.prototype, 'extractAllTo');
        sinon.stub(fs, 'readFile');
        sinon.stub(xml2js, 'parseString');
    });

    afterEach(() => {
        sinon.restore();
    });

    it('should create output directory if it does not exist', () => {
        parseXSN(xsnFilePath);
        expect(fs.existsSync.calledWith(outputDir)).to.be.true;
        expect(fs.mkdirSync.calledWith(outputDir)).to.be.true;
    });

    it('should extract the XSN file to the output directory', () => {
        parseXSN(xsnFilePath);
        expect(AdmZip.prototype.extractAllTo.calledWith(outputDir, true)).to.be.true;
    });

    it('should read and parse template.xml', () => {
        const templateData = '<xml></xml>';
        fs.readFile.withArgs(templateFilePath, 'utf8').yields(null, templateData);
        xml2js.parseString.yields(null, {});

        parseXSN(xsnFilePath);

        expect(fs.readFile.calledWith(templateFilePath, 'utf8')).to.be.true;
        expect(xml2js.parseString.calledWith(templateData, { mergeAttrs: true })).to.be.true;
    });

    it('should handle error while reading template.xml', () => {
        const consoleErrorStub = sinon.stub(console, 'error');
        const error = new Error('read error');
        fs.readFile.withArgs(templateFilePath, 'utf8').yields(error);

        parseXSN(xsnFilePath);

        expect(consoleErrorStub.calledWith('读取 template.xml 文件出错:', error)).to.be.true;
        consoleErrorStub.restore();
    });

    it('should handle error while parsing template.xml', () => {
        const consoleErrorStub = sinon.stub(console, 'error');
        const templateData = '<xml></xml>';
        const error = new Error('parse error');
        fs.readFile.withArgs(templateFilePath, 'utf8').yields(null, templateData);
        xml2js.parseString.yields(error);

        parseXSN(xsnFilePath);

        expect(consoleErrorStub.calledWith('解析 template.xml 时出错:', error)).to.be.true;
        consoleErrorStub.restore();
    });

    it('should read and parse manifest.xsf', () => {
        const manifestData = '<xml></xml>';
        fs.readFile.withArgs(manifestFilePath, 'utf8').yields(null, manifestData);
        xml2js.parseString.yields(null, {});

        parseXSN(xsnFilePath);

        expect(fs.readFile.calledWith(manifestFilePath, 'utf8')).to.be.true;
        expect(xml2js.parseString.calledWith(manifestData, { mergeAttrs: true })).to.be.true;
    });

    it('should handle error while reading manifest.xsf', () => {
        const consoleErrorStub = sinon.stub(console, 'error');
        const error = new Error('read error');
        fs.readFile.withArgs(manifestFilePath, 'utf8').yields(error);

        parseXSN(xsnFilePath);

        expect(consoleErrorStub.calledWith('读取 manifest.xsf 文件出错:', error)).to.be.true;
        consoleErrorStub.restore();
    });

    it('should handle error while parsing manifest.xsf', () => {
        const consoleErrorStub = sinon.stub(console, 'error');
        const manifestData = '<xml></xml>';
        const error = new Error('parse error');
        fs.readFile.withArgs(manifestFilePath, 'utf8').yields(null, manifestData);
        xml2js.parseString.yields(error);

        parseXSN(xsnFilePath);

        expect(consoleErrorStub.calledWith('解析 manifest.xsf 时出错:', error)).to.be.true;
        consoleErrorStub.restore();
    });
});
describe('parseXSN', () => {
    const xsnFilePath = path.join(__dirname, 'template', 'default', 'DEMO.xsn');
    const outputDir = path.join(__dirname, 'out');
    const templateFilePath = path.join(outputDir, 'template.xml');
    const manifestFilePath = path.join(outputDir, 'manifest.xsf');

    beforeEach(() => {
        sinon.stub(fs, 'existsSync').returns(false);
        sinon.stub(fs, 'mkdirSync');
        sinon.stub(AdmZip.prototype, 'extractAllTo');
        sinon.stub(fs, 'readFile');
        sinon.stub(xml2js, 'parseString');
    });

    afterEach(() => {
        sinon.restore();
    });

    it('should create output directory if it does not exist', () => {
        parseXSN(xsnFilePath);
        expect(fs.existsSync.calledWith(outputDir)).to.be.true;
        expect(fs.mkdirSync.calledWith(outputDir)).to.be.true;
    });

    it('should extract the XSN file to the output directory', () => {
        parseXSN(xsnFilePath);
        expect(AdmZip.prototype.extractAllTo.calledWith(outputDir, true)).to.be.true;
    });

    it('should read and parse template.xml', () => {
        const templateData = '<xml></xml>';
        fs.readFile.withArgs(templateFilePath, 'utf8').yields(null, templateData);
        xml2js.parseString.yields(null, {});

        parseXSN(xsnFilePath);

        expect(fs.readFile.calledWith(templateFilePath, 'utf8')).to.be.true;
        expect(xml2js.parseString.calledWith(templateData, { mergeAttrs: true })).to.be.true;
    });

    it('should handle error while reading template.xml', () => {
        const consoleErrorStub = sinon.stub(console, 'error');
        const error = new Error('read error');
        fs.readFile.withArgs(templateFilePath, 'utf8').yields(error);

        parseXSN(xsnFilePath);

        expect(consoleErrorStub.calledWith('读取 template.xml 文件出错:', error)).to.be.true;
        consoleErrorStub.restore();
    });

    it('should handle error while parsing template.xml', () => {
        const consoleErrorStub = sinon.stub(console, 'error');
        const templateData = '<xml></xml>';
        const error = new Error('parse error');
        fs.readFile.withArgs(templateFilePath, 'utf8').yields(null, templateData);
        xml2js.parseString.yields(error);

        parseXSN(xsnFilePath);

        expect(consoleErrorStub.calledWith('解析 template.xml 时出错:', error)).to.be.true;
        consoleErrorStub.restore();
    });

    it('should read and parse manifest.xsf', () => {
        const manifestData = '<xml></xml>';
        fs.readFile.withArgs(manifestFilePath, 'utf8').yields(null, manifestData);
        xml2js.parseString.yields(null, {});

        parseXSN(xsnFilePath);

        expect(fs.readFile.calledWith(manifestFilePath, 'utf8')).to.be.true;
        expect(xml2js.parseString.calledWith(manifestData, { mergeAttrs: true })).to.be.true;
    });

    it('should handle error while reading manifest.xsf', () => {
        const consoleErrorStub = sinon.stub(console, 'error');
        const error = new Error('read error');
        fs.readFile.withArgs(manifestFilePath, 'utf8').yields(error);

        parseXSN(xsnFilePath);

        expect(consoleErrorStub.calledWith('读取 manifest.xsf 文件出错:', error)).to.be.true;
        consoleErrorStub.restore();
    });

    it('should handle error while parsing manifest.xsf', () => {
        const consoleErrorStub = sinon.stub(console, 'error');
        const manifestData = '<xml></xml>';
        const error = new Error('parse error');
        fs.readFile.withArgs(manifestFilePath, 'utf8').yields(null, manifestData);
        xml2js.parseString.yields(error);

        parseXSN(xsnFilePath);

        expect(consoleErrorStub.calledWith('解析 manifest.xsf 时出错:', error)).to.be.true;
        consoleErrorStub.restore();
    });
});