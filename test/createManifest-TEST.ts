import { createManifest } from '../render/createManifest';
import { expect } from 'chai';
import 'mocha';

describe('createManifest', () => {
    it('should create a manifest with default values', () => {
        const result = createManifest();
        expect(result).to.have.property('name');
        expect(result).to.have.property('version');
        expect(result).to.have.property('manifest_version');
    });

    it('should create a manifest with provided values', () => {
        const customValues = {
            name: 'Custom Name',
            version: '1.0.1',
            manifest_version: 2
        };
        const result = createManifest(customValues);
        expect(result.name).to.equal(customValues.name);
        expect(result.version).to.equal(customValues.version);
        expect(result.manifest_version).to.equal(customValues.manifest_version);
    });
});