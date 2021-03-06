import {
    HttpUtility,
    RouteAttribute
} from '../../index';

describe('modules.utility.http.utility.spec', () => {
    it('hasBody.returns_false_when_null', () => {
        let result = HttpUtility.hasBody(null);
        expect(result).toBeFalsy();
    });
    it('hasBody.returns_false_when_undefined', () => {
        let result = HttpUtility.hasBody(undefined);
        expect(result).toBeFalsy();
    });
    // Intentionally added literal strings for check
    // Just to make sure tests fail when RouteAttribute values are changed
    it('hasBody.returns_false_when_all', () => {
        let result = HttpUtility.hasBody(RouteAttribute.httpAll_ActionAttribute);
        expect(result).toBeFalsy();
    });
    it('hasBody.returns_false_when_get', () => {
        let result = HttpUtility.hasBody(RouteAttribute.httpGet_ActionAttribute);
        expect(result).toBeFalsy();
    });
    it('hasBody.returns_false_when_head', () => {
        let result = HttpUtility.hasBody(RouteAttribute.httpHead_ActionAttribute);
        expect(result).toBeFalsy();
    });
    it('hasBody.returns_false_when_delete', () => {
        let result = HttpUtility.hasBody(RouteAttribute.httpDelete_ActionAttribute);
        expect(result).toBeFalsy();
    });
    it('hasBody.returns_true_when_post', () => {
        let result = HttpUtility.hasBody(RouteAttribute.httpPost_ActionAttribute);
        expect(result).toBeTruthy();
    });
    it('hasBody.returns_true_when_put', () => {
        let result = HttpUtility.hasBody(RouteAttribute.httpPut_ActionAttribute);
        expect(result).toBeTruthy();
    });
    it('hasBody.returns_true_when_patch', () => {
        let result = HttpUtility.hasBody(RouteAttribute.httpPatch_ActionAttribute);
        expect(result).toBeTruthy();
    });
});
