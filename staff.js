function registerTeacher(name, subject, likesBananaCat = true) {
    if (!name || !subject) {
        return -1;
    } else {
        return {
            name: name,
            subject: subject,
            likesBananaCat: likesBananaCat
        };
    }
}

function ternaryTeacher(name, subject, likesBananaCat = true) {
    return !name || !subject ? -1 
        : { name: name, subject: subject, likesBananaCat: likesBananaCat };
}

function registerTA(name, isLcGrad) {
    if (!name || !isLcGrad) {
        return -1;
    } else {
        return {
            name: name,
            isLcGrad: isLcGrad
        };
    }
}

function ternaryTA(name, isLcGrad) {
    return !name || !isLcGrad ? -1
        : { name: name, isLcGrad: isLcGrad };
}

module.exports = {
    registerTeacher: registerTeacher,
    registerTA: registerTA
};