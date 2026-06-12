import { z } from 'zod';

declare const AdminRoleSchema: z.ZodEnum<{
    OWNER: "OWNER";
    ADMIN: "ADMIN";
    TEACHER: "TEACHER";
}>;
type AdminRole = z.infer<typeof AdminRoleSchema>;
declare const adminRoles: AdminRole[];
declare const AdminRoleKorSchema: z.ZodEnum<{
    대표자: "대표자";
    관리자: "관리자";
    선생님: "선생님";
}>;
type AdminRoleKor = z.infer<typeof AdminRoleKorSchema>;
declare const adminRolesKor: AdminRoleKor[];
declare const AdminEntitySchema: z.ZodObject<{
    academy_id: z.ZodUUID;
    user_id: z.ZodUUID;
    role: z.ZodEnum<{
        OWNER: "OWNER";
        ADMIN: "ADMIN";
        TEACHER: "TEACHER";
    }>;
}, z.core.$strip>;
type AdminEntity = z.infer<typeof AdminEntitySchema>;
declare const AcademyAddressSchema: z.ZodObject<{}, z.core.$strip>;
declare const AcademyEntitySchema: z.ZodObject<{
    id: z.ZodUUID;
    name: z.ZodString;
    ceo: z.ZodString;
    regi: z.ZodString;
    address: z.ZodNullable<z.ZodObject<{}, z.core.$strip>>;
    created_at: z.ZodDate;
    updated_at: z.ZodDate;
}, z.core.$strip>;
type AcademyEntity = z.infer<typeof AcademyEntitySchema>;
declare const UserAcademySchema: z.ZodObject<{
    id: z.ZodUUID;
    name: z.ZodString;
    ceo: z.ZodString;
    regi: z.ZodString;
    address: z.ZodNullable<z.ZodObject<{}, z.core.$strip>>;
    created_at: z.ZodDate;
    updated_at: z.ZodDate;
    subject: z.ZodArray<z.ZodString>;
    emails: z.ZodArray<z.ZodEmail>;
    tels: z.ZodArray<z.ZodString>;
    role: z.ZodEnum<{
        OWNER: "OWNER";
        ADMIN: "ADMIN";
        TEACHER: "TEACHER";
    }>;
}, z.core.$strip>;
type UserAcademy = z.infer<typeof UserAcademySchema>;
declare const AcademyPayloadSchema: z.ZodObject<{
    role: z.ZodEnum<{
        OWNER: "OWNER";
        ADMIN: "ADMIN";
        TEACHER: "TEACHER";
    }>;
    name: z.ZodString;
    ceo: z.ZodString;
    regi: z.ZodString;
    address: z.ZodNullable<z.ZodObject<{}, z.core.$strip>>;
    subject: z.ZodArray<z.ZodString>;
    emails: z.ZodArray<z.ZodEmail>;
    tels: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
type AcademyPayload = z.infer<typeof AcademyPayloadSchema>;
declare const initialAcademy: AcademyPayload;
declare const AcademyUpdatePayloadSchema: z.ZodObject<{
    target: z.ZodEnum<{
        role: "role";
        name: "name";
        ceo: "ceo";
        regi: "regi";
        address: "address";
        subject: "subject";
        emails: "emails";
        tels: "tels";
    }>;
    value: z.ZodAny;
}, z.core.$strip>;
type AcademyUpdatePayload = z.infer<typeof AcademyUpdatePayloadSchema>;
declare const academyQuery: {
    academy: string;
    admin: string;
};

declare const LessonSortSchema: z.ZodEnum<{
    PRE: "PRE";
    PRIMARY: "PRIMARY";
    INTER_MEDIATE: "INTER_MEDIATE";
    HIGH: "HIGH";
    ADULT: "ADULT";
}>;
type LessonSort = z.infer<typeof LessonSortSchema>;
declare const lessonSorts: LessonSort[];
declare const LessonSortKorSchema: z.ZodEnum<{
    유치부: "유치부";
    초등부: "초등부";
    중등부: "중등부";
    고등부: "고등부";
    성인부: "성인부";
}>;
type LessonSortKor = z.infer<typeof LessonSortKorSchema>;
declare const LessonSortsKor: LessonSortKor[];
declare const LessonEntitySchema: z.ZodObject<{
    id: z.ZodUUID;
    academy_id: z.ZodUUID;
    name: z.ZodString;
    sort: z.ZodEnum<{
        PRE: "PRE";
        PRIMARY: "PRIMARY";
        INTER_MEDIATE: "INTER_MEDIATE";
        HIGH: "HIGH";
        ADULT: "ADULT";
    }>;
    subject: z.ZodString;
    price: z.ZodNumber;
    length_per_lesson: z.ZodNumber;
    count_per_week: z.ZodNumber;
    count_per_month: z.ZodNumber;
    created_at: z.ZodDate;
    updated_at: z.ZodDate;
}, z.core.$strip>;
type LessonEntity = z.infer<typeof LessonEntitySchema>;
declare const LessonSchema: z.ZodObject<{
    id: z.ZodUUID;
    name: z.ZodString;
    created_at: z.ZodDate;
    updated_at: z.ZodDate;
    subject: z.ZodString;
    sort: z.ZodEnum<{
        PRE: "PRE";
        PRIMARY: "PRIMARY";
        INTER_MEDIATE: "INTER_MEDIATE";
        HIGH: "HIGH";
        ADULT: "ADULT";
    }>;
    price: z.ZodNumber;
    length_per_lesson: z.ZodNumber;
    count_per_week: z.ZodNumber;
    count_per_month: z.ZodNumber;
}, z.core.$strip>;
type Lesson = z.infer<typeof LessonSchema>;
declare const LessonPayloadSchema: z.ZodObject<{
    name: z.ZodString;
    subject: z.ZodString;
    sort: z.ZodEnum<{
        PRE: "PRE";
        PRIMARY: "PRIMARY";
        INTER_MEDIATE: "INTER_MEDIATE";
        HIGH: "HIGH";
        ADULT: "ADULT";
    }>;
    price: z.ZodNumber;
    length_per_lesson: z.ZodNumber;
    count_per_week: z.ZodNumber;
    count_per_month: z.ZodNumber;
}, z.core.$strip>;
type LessonPayload = z.infer<typeof LessonPayloadSchema>;
declare const LessonUpdatePayloadSchema: z.ZodObject<{
    target: z.ZodEnum<{
        name: "name";
        subject: "subject";
        sort: "sort";
        price: "price";
        length_per_lesson: "length_per_lesson";
        count_per_week: "count_per_week";
        count_per_month: "count_per_month";
    }>;
    value: z.ZodAny;
}, z.core.$strip>;
declare const StudentLessonEntitySchema: z.ZodObject<{
    student_id: z.ZodUUID;
    lesson_id: z.ZodUUID;
}, z.core.$strip>;
type StudentLessonEntity = z.infer<typeof StudentLessonEntitySchema>;

declare const RelationshipSchema: z.ZodEnum<{
    부: "부";
    모: "모";
    조부모: "조부모";
    사촌: "사촌";
}>;
type Relationship = z.infer<typeof RelationshipSchema>;
declare const relationships: Relationship[];
declare const ParentEntitySchema: z.ZodObject<{
    id: z.ZodUUID;
    academy_id: z.ZodUUID;
    name: z.ZodString;
    mobile: z.ZodString;
    relationships: z.ZodUnion<[z.ZodEnum<{
        부: "부";
        모: "모";
        조부모: "조부모";
        사촌: "사촌";
    }>, z.ZodString]>;
    created_at: z.ZodDate;
    updated_at: z.ZodDate;
}, z.core.$strip>;
type ParentEntity = z.infer<typeof ParentEntitySchema>;
declare const ParentSchema: z.ZodObject<{
    id: z.ZodUUID;
    name: z.ZodString;
    created_at: z.ZodDate;
    updated_at: z.ZodDate;
    mobile: z.ZodString;
    relationships: z.ZodUnion<[z.ZodEnum<{
        부: "부";
        모: "모";
        조부모: "조부모";
        사촌: "사촌";
    }>, z.ZodString]>;
}, z.core.$strip>;
type Parent = z.infer<typeof ParentSchema>;
declare const ParentPayloadSchema: z.ZodObject<{
    id: z.ZodUUID;
    name: z.ZodString;
    mobile: z.ZodString;
    relationships: z.ZodUnion<[z.ZodEnum<{
        부: "부";
        모: "모";
        조부모: "조부모";
        사촌: "사촌";
    }>, z.ZodString]>;
}, z.core.$strip>;
type ParentPayload = z.infer<typeof ParentPayloadSchema>;
declare const ParentUpdatePayloadSchema: z.ZodObject<{
    target: z.ZodEnum<{
        id: "id";
        name: "name";
        mobile: "mobile";
        relationships: "relationships";
    }>;
    value: z.ZodAny;
}, z.core.$strip>;
type ParentUpdatePayload = z.infer<typeof ParentUpdatePayloadSchema>;

declare const SchoolSortSchema: z.ZodEnum<{
    PRE: "PRE";
    PRIMARY: "PRIMARY";
    HIGH: "HIGH";
    MIDDLE: "MIDDLE";
    UNI: "UNI";
    WORK: "WORK";
}>;
type SchoolSort = z.infer<typeof SchoolSortSchema>;
declare const schoolSorts: SchoolSort[];
declare const SchoolSortKorSchema: z.ZodEnum<{
    유치원: "유치원";
    초등학교: "초등학교";
    중학교: "중학교";
    고등학교: "고등학교";
    대학교: "대학교";
    직장: "직장";
}>;
type SchoolSortKor = z.infer<typeof SchoolSortKorSchema>;
declare const schoolSortsKor: SchoolSortKor[];
declare const SchoolEntitySchema: z.ZodObject<{
    id: z.ZodUUID;
    academy_id: z.ZodUUID;
    name: z.ZodString;
    sort: z.ZodUnion<[z.ZodEnum<{
        PRE: "PRE";
        PRIMARY: "PRIMARY";
        HIGH: "HIGH";
        MIDDLE: "MIDDLE";
        UNI: "UNI";
        WORK: "WORK";
    }>, z.ZodString]>;
    created_at: z.ZodDate;
    updated_at: z.ZodDate;
}, z.core.$strip>;
type SchoolEntity = z.infer<typeof SchoolEntitySchema>;
declare const StudentSchoolDescSchema: z.ZodEnum<{
    "1\uD559\uB144": "1학년";
    "2\uD559\uB144": "2학년";
    "3\uD559\uB144": "3학년";
    "4\uD559\uB144": "4학년";
    "5\uD559\uB144": "5학년";
    "6\uD559\uB144": "6학년";
}>;
type StudentSchoolDesc = z.infer<typeof StudentSchoolDescSchema>;
declare const schoolDescs: StudentSchoolDesc[];
declare const SchoolPayloadSchema: z.ZodObject<{
    name: z.ZodString;
    sort: z.ZodUnion<[z.ZodEnum<{
        PRE: "PRE";
        PRIMARY: "PRIMARY";
        HIGH: "HIGH";
        MIDDLE: "MIDDLE";
        UNI: "UNI";
        WORK: "WORK";
    }>, z.ZodString]>;
}, z.core.$strip>;
type SchoolPayload = z.infer<typeof SchoolPayloadSchema>;
declare const SchoolUploadPayloadSchema: z.ZodObject<{
    target: z.ZodEnum<{
        name: "name";
        sort: "sort";
    }>;
    value: z.ZodAny;
}, z.core.$strip>;
type SchoolUploadPayload = z.infer<typeof SchoolUploadPayloadSchema>;
declare const initialSchool: SchoolPayload;
declare const StudentSchoolSchema: z.ZodObject<{
    id: z.ZodUUID;
    name: z.ZodString;
    created_at: z.ZodDate;
    updated_at: z.ZodDate;
    sort: z.ZodUnion<[z.ZodEnum<{
        PRE: "PRE";
        PRIMARY: "PRIMARY";
        HIGH: "HIGH";
        MIDDLE: "MIDDLE";
        UNI: "UNI";
        WORK: "WORK";
    }>, z.ZodString]>;
    description: z.ZodNullable<z.ZodUnion<[z.ZodEnum<{
        "1\uD559\uB144": "1학년";
        "2\uD559\uB144": "2학년";
        "3\uD559\uB144": "3학년";
        "4\uD559\uB144": "4학년";
        "5\uD559\uB144": "5학년";
        "6\uD559\uB144": "6학년";
    }>, z.ZodString]>>;
}, z.core.$strip>;
type StudentSchool = z.infer<typeof StudentSchoolSchema>;
declare const StudentSchoolPayloadSchema: z.ZodObject<{
    name: z.ZodString;
    sort: z.ZodUnion<[z.ZodEnum<{
        PRE: "PRE";
        PRIMARY: "PRIMARY";
        HIGH: "HIGH";
        MIDDLE: "MIDDLE";
        UNI: "UNI";
        WORK: "WORK";
    }>, z.ZodString]>;
    description: z.ZodNullable<z.ZodUnion<[z.ZodEnum<{
        "1\uD559\uB144": "1학년";
        "2\uD559\uB144": "2학년";
        "3\uD559\uB144": "3학년";
        "4\uD559\uB144": "4학년";
        "5\uD559\uB144": "5학년";
        "6\uD559\uB144": "6학년";
    }>, z.ZodString]>>;
}, z.core.$strip>;
type StudentSchoolPayload = z.infer<typeof StudentSchoolPayloadSchema>;
declare const StudentSchoolEntitySchema: z.ZodObject<{
    school_id: z.ZodUUID;
    academy_id: z.ZodUUID;
    description: z.ZodNullable<z.ZodUnion<[z.ZodEnum<{
        "1\uD559\uB144": "1학년";
        "2\uD559\uB144": "2학년";
        "3\uD559\uB144": "3학년";
        "4\uD559\uB144": "4학년";
        "5\uD559\uB144": "5학년";
        "6\uD559\uB144": "6학년";
    }>, z.ZodString]>>;
}, z.core.$strip>;
type StudentSchoolEntity = z.infer<typeof StudentSchoolEntitySchema>;
declare const StudentSchoolUploadPayloadSchema: z.ZodObject<{
    target: z.ZodEnum<{
        academy_id: "academy_id";
        description: "description";
        school_id: "school_id";
    }>;
    value: z.ZodAny;
}, z.core.$strip>;
type StudentSchoolUploadPayload = z.infer<typeof StudentSchoolUploadPayloadSchema>;
declare const initialStudentSchool: StudentSchoolPayload;

declare const StudentEntitySchema: z.ZodObject<{
    id: z.ZodUUID;
    academy_id: z.ZodUUID;
    name: z.ZodString;
    dob: z.ZodNullable<z.ZodString>;
    mobile: z.ZodString;
    payment_date: z.ZodNumber;
    enrolled_at: z.ZodDate;
    discharged_at: z.ZodDate;
    created_at: z.ZodDate;
    updated_at: z.ZodDate;
}, z.core.$strip>;
type StudentEntity = z.infer<typeof StudentEntitySchema>;
declare const PaymentMethodSchema: z.ZodEnum<{
    CARD: "CARD";
    BANK_TRANSFER: "BANK_TRANSFER";
    CASH: "CASH";
}>;
type PaymentMethod = z.infer<typeof PaymentMethodSchema>;
declare const paymentMehods: PaymentMethod[];
declare const PaymentEntitySchema: z.ZodObject<{
    id: z.ZodUUID;
    academy_id: z.ZodUUID;
    title: z.ZodString;
    desc: z.ZodNullable<z.ZodString>;
    issued_at: z.ZodDate;
    billing_at: z.ZodDate;
    paid_at: z.ZodNullable<z.ZodDate>;
    payment_methos: z.ZodNullable<z.ZodEnum<{
        CARD: "CARD";
        BANK_TRANSFER: "BANK_TRANSFER";
        CASH: "CASH";
    }>>;
    total_amount: z.ZodString;
    updated_at: z.ZodDate;
}, z.core.$strip>;
type PaymentEntity = z.infer<typeof PaymentEntitySchema>;
declare const StudentPaymentEntitySchema: z.ZodObject<{
    payment_id: z.ZodUUID;
    student_id: z.ZodUUID;
}, z.core.$strip>;
type StudentPaymentEntity = z.infer<typeof StudentPaymentEntitySchema>;
declare const PaymentItemEntitySchema: z.ZodObject<{
    id: z.ZodUUID;
    payment_id: z.ZodUUID;
    title: z.ZodString;
    quan: z.ZodNumber;
    amount: z.ZodString;
}, z.core.$strip>;
type PaymentItemEntity = z.infer<typeof PaymentItemEntitySchema>;
declare const PaymentItemPayloadSchema: z.ZodObject<{
    title: z.ZodString;
    quan: z.ZodNumber;
    amount: z.ZodString;
}, z.core.$strip>;
type PaymentItemPayload = z.infer<typeof PaymentItemPayloadSchema>;
declare const PaymentItemSchema: z.ZodObject<{
    id: z.ZodUUID;
    title: z.ZodString;
    quan: z.ZodNumber;
    amount: z.ZodString;
}, z.core.$strip>;
type PaymentItem = z.infer<typeof PaymentItemSchema>;
declare const PaymentPayloadSchema: z.ZodObject<{
    academy_id: z.ZodUUID;
    title: z.ZodString;
    desc: z.ZodNullable<z.ZodString>;
    billing_at: z.ZodDate;
    paid_at: z.ZodNullable<z.ZodDate>;
    payment_methos: z.ZodNullable<z.ZodEnum<{
        CARD: "CARD";
        BANK_TRANSFER: "BANK_TRANSFER";
        CASH: "CASH";
    }>>;
    total_amount: z.ZodString;
    items: z.ZodArray<z.ZodObject<{
        title: z.ZodString;
        quan: z.ZodNumber;
        amount: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
type PaymentPayload = z.infer<typeof PaymentPayloadSchema>;
declare const PaymentUpdatePayloadSchema: z.ZodObject<{
    target: z.ZodEnum<{
        academy_id: "academy_id";
        title: "title";
        desc: "desc";
        billing_at: "billing_at";
        paid_at: "paid_at";
        payment_methos: "payment_methos";
        total_amount: "total_amount";
        items: "items";
    }>;
    value: z.ZodAny;
}, z.core.$strip>;
type PaymentUpdatePayload = z.infer<typeof PaymentUpdatePayloadSchema>;
declare const PaymentSchema: z.ZodObject<{
    id: z.ZodUUID;
    updated_at: z.ZodDate;
    title: z.ZodString;
    desc: z.ZodNullable<z.ZodString>;
    issued_at: z.ZodDate;
    billing_at: z.ZodDate;
    paid_at: z.ZodNullable<z.ZodDate>;
    payment_methos: z.ZodNullable<z.ZodEnum<{
        CARD: "CARD";
        BANK_TRANSFER: "BANK_TRANSFER";
        CASH: "CASH";
    }>>;
    total_amount: z.ZodString;
    items: z.ZodArray<z.ZodObject<{
        id: z.ZodUUID;
        title: z.ZodString;
        quan: z.ZodNumber;
        amount: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
declare const UserStudentSchema: z.ZodObject<{
    id: z.ZodUUID;
    name: z.ZodString;
    created_at: z.ZodDate;
    updated_at: z.ZodDate;
    mobile: z.ZodString;
    dob: z.ZodNullable<z.ZodString>;
    payment_date: z.ZodNumber;
    enrolled_at: z.ZodDate;
    discharged_at: z.ZodDate;
    payments: z.ZodArray<z.ZodObject<{
        id: z.ZodUUID;
        updated_at: z.ZodDate;
        title: z.ZodString;
        desc: z.ZodNullable<z.ZodString>;
        issued_at: z.ZodDate;
        billing_at: z.ZodDate;
        paid_at: z.ZodNullable<z.ZodDate>;
        payment_methos: z.ZodNullable<z.ZodEnum<{
            CARD: "CARD";
            BANK_TRANSFER: "BANK_TRANSFER";
            CASH: "CASH";
        }>>;
        total_amount: z.ZodString;
        items: z.ZodArray<z.ZodObject<{
            id: z.ZodUUID;
            title: z.ZodString;
            quan: z.ZodNumber;
            amount: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    lessons: z.ZodArray<z.ZodObject<{
        id: z.ZodUUID;
        name: z.ZodString;
        created_at: z.ZodDate;
        updated_at: z.ZodDate;
        subject: z.ZodString;
        sort: z.ZodEnum<{
            PRE: "PRE";
            PRIMARY: "PRIMARY";
            INTER_MEDIATE: "INTER_MEDIATE";
            HIGH: "HIGH";
            ADULT: "ADULT";
        }>;
        price: z.ZodNumber;
        length_per_lesson: z.ZodNumber;
        count_per_week: z.ZodNumber;
        count_per_month: z.ZodNumber;
    }, z.core.$strip>>;
    schools: z.ZodArray<z.ZodObject<{
        id: z.ZodUUID;
        name: z.ZodString;
        created_at: z.ZodDate;
        updated_at: z.ZodDate;
        sort: z.ZodUnion<[z.ZodEnum<{
            PRE: "PRE";
            PRIMARY: "PRIMARY";
            HIGH: "HIGH";
            MIDDLE: "MIDDLE";
            UNI: "UNI";
            WORK: "WORK";
        }>, z.ZodString]>;
        description: z.ZodNullable<z.ZodUnion<[z.ZodEnum<{
            "1\uD559\uB144": "1학년";
            "2\uD559\uB144": "2학년";
            "3\uD559\uB144": "3학년";
            "4\uD559\uB144": "4학년";
            "5\uD559\uB144": "5학년";
            "6\uD559\uB144": "6학년";
        }>, z.ZodString]>>;
    }, z.core.$strip>>;
    parents: z.ZodArray<z.ZodObject<{
        id: z.ZodUUID;
        name: z.ZodString;
        created_at: z.ZodDate;
        updated_at: z.ZodDate;
        mobile: z.ZodString;
        relationships: z.ZodUnion<[z.ZodEnum<{
            부: "부";
            모: "모";
            조부모: "조부모";
            사촌: "사촌";
        }>, z.ZodString]>;
    }, z.core.$strip>>;
}, z.core.$strip>;
type UserStudent = z.infer<typeof UserStudentSchema>;
declare const StudentPayloadSchema: z.ZodObject<{
    name: z.ZodString;
    mobile: z.ZodString;
    dob: z.ZodNullable<z.ZodString>;
    payment_date: z.ZodNumber;
    enrolled_at: z.ZodDate;
    discharged_at: z.ZodDate;
    payments: z.ZodArray<z.ZodObject<{
        id: z.ZodUUID;
        updated_at: z.ZodDate;
        title: z.ZodString;
        desc: z.ZodNullable<z.ZodString>;
        issued_at: z.ZodDate;
        billing_at: z.ZodDate;
        paid_at: z.ZodNullable<z.ZodDate>;
        payment_methos: z.ZodNullable<z.ZodEnum<{
            CARD: "CARD";
            BANK_TRANSFER: "BANK_TRANSFER";
            CASH: "CASH";
        }>>;
        total_amount: z.ZodString;
        items: z.ZodArray<z.ZodObject<{
            id: z.ZodUUID;
            title: z.ZodString;
            quan: z.ZodNumber;
            amount: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    lessons: z.ZodArray<z.ZodObject<{
        id: z.ZodUUID;
        name: z.ZodString;
        created_at: z.ZodDate;
        updated_at: z.ZodDate;
        subject: z.ZodString;
        sort: z.ZodEnum<{
            PRE: "PRE";
            PRIMARY: "PRIMARY";
            INTER_MEDIATE: "INTER_MEDIATE";
            HIGH: "HIGH";
            ADULT: "ADULT";
        }>;
        price: z.ZodNumber;
        length_per_lesson: z.ZodNumber;
        count_per_week: z.ZodNumber;
        count_per_month: z.ZodNumber;
    }, z.core.$strip>>;
    schools: z.ZodArray<z.ZodObject<{
        id: z.ZodUUID;
        name: z.ZodString;
        created_at: z.ZodDate;
        updated_at: z.ZodDate;
        sort: z.ZodUnion<[z.ZodEnum<{
            PRE: "PRE";
            PRIMARY: "PRIMARY";
            HIGH: "HIGH";
            MIDDLE: "MIDDLE";
            UNI: "UNI";
            WORK: "WORK";
        }>, z.ZodString]>;
        description: z.ZodNullable<z.ZodUnion<[z.ZodEnum<{
            "1\uD559\uB144": "1학년";
            "2\uD559\uB144": "2학년";
            "3\uD559\uB144": "3학년";
            "4\uD559\uB144": "4학년";
            "5\uD559\uB144": "5학년";
            "6\uD559\uB144": "6학년";
        }>, z.ZodString]>>;
    }, z.core.$strip>>;
    parents: z.ZodArray<z.ZodObject<{
        id: z.ZodUUID;
        name: z.ZodString;
        created_at: z.ZodDate;
        updated_at: z.ZodDate;
        mobile: z.ZodString;
        relationships: z.ZodUnion<[z.ZodEnum<{
            부: "부";
            모: "모";
            조부모: "조부모";
            사촌: "사촌";
        }>, z.ZodString]>;
    }, z.core.$strip>>;
}, z.core.$strip>;
type StudentPayload = z.infer<typeof StudentPayloadSchema>;
declare const StudentUpdatePayloadSchema: z.ZodObject<{
    target: z.ZodEnum<{
        name: "name";
        mobile: "mobile";
        dob: "dob";
        payment_date: "payment_date";
        enrolled_at: "enrolled_at";
        discharged_at: "discharged_at";
        payments: "payments";
        lessons: "lessons";
        schools: "schools";
        parents: "parents";
    }>;
    value: z.ZodAny;
}, z.core.$strip>;
type StudentUpdatePayload = z.infer<typeof StudentUpdatePayloadSchema>;

declare const UserRoleSchema: z.ZodEnum<{
    TEACHER: "TEACHER";
    BIZ: "BIZ";
    STUDENT: "STUDENT";
    PARENT: "PARENT";
}>;
type UserRole = z.infer<typeof UserRoleSchema>;
declare const userRoles: UserRole[];
declare const YoonbeeseoUserEntitySchema: z.ZodObject<{
    uid: z.ZodUUID;
    email: z.ZodEmail;
    mobile: z.ZodString;
    name: z.ZodString;
    dob: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
type YoonbeeseoUserEntity = z.infer<typeof YoonbeeseoUserEntitySchema>;
declare const YoonbeeseoUserSchema: z.ZodObject<{
    uid: z.ZodUUID;
    email: z.ZodEmail;
    mobile: z.ZodString;
    name: z.ZodString;
    dob: z.ZodNullable<z.ZodString>;
    roles: z.ZodArray<z.ZodEnum<{
        TEACHER: "TEACHER";
        BIZ: "BIZ";
        STUDENT: "STUDENT";
        PARENT: "PARENT";
    }>>;
    academies: z.ZodArray<z.ZodObject<{
        id: z.ZodUUID;
        name: z.ZodString;
        ceo: z.ZodString;
        regi: z.ZodString;
        address: z.ZodNullable<z.ZodObject<{}, z.core.$strip>>;
        created_at: z.ZodDate;
        updated_at: z.ZodDate;
        subject: z.ZodArray<z.ZodString>;
        emails: z.ZodArray<z.ZodEmail>;
        tels: z.ZodArray<z.ZodString>;
        role: z.ZodEnum<{
            OWNER: "OWNER";
            ADMIN: "ADMIN";
            TEACHER: "TEACHER";
        }>;
    }, z.core.$strip>>;
}, z.core.$strip>;
type YoonbeeseoUser = z.infer<typeof YoonbeeseoUserSchema>;

export { AcademyAddressSchema, type AcademyEntity, AcademyEntitySchema, type AcademyPayload, AcademyPayloadSchema, type AcademyUpdatePayload, AcademyUpdatePayloadSchema, type AdminEntity, AdminEntitySchema, type AdminRole, type AdminRoleKor, AdminRoleKorSchema, AdminRoleSchema, type Lesson, type LessonEntity, LessonEntitySchema, type LessonPayload, LessonPayloadSchema, LessonSchema, type LessonSort, type LessonSortKor, LessonSortKorSchema, LessonSortSchema, LessonSortsKor, LessonUpdatePayloadSchema, type Parent, type ParentEntity, ParentEntitySchema, type ParentPayload, ParentPayloadSchema, ParentSchema, type ParentUpdatePayload, ParentUpdatePayloadSchema, type PaymentEntity, PaymentEntitySchema, type PaymentItem, type PaymentItemEntity, PaymentItemEntitySchema, type PaymentItemPayload, PaymentItemPayloadSchema, PaymentItemSchema, type PaymentMethod, PaymentMethodSchema, type PaymentPayload, PaymentPayloadSchema, PaymentSchema, type PaymentUpdatePayload, PaymentUpdatePayloadSchema, type Relationship, RelationshipSchema, type SchoolEntity, SchoolEntitySchema, type SchoolPayload, SchoolPayloadSchema, type SchoolSort, type SchoolSortKor, SchoolSortKorSchema, SchoolSortSchema, type SchoolUploadPayload, SchoolUploadPayloadSchema, type StudentEntity, StudentEntitySchema, type StudentLessonEntity, StudentLessonEntitySchema, type StudentPayload, StudentPayloadSchema, type StudentPaymentEntity, StudentPaymentEntitySchema, type StudentSchool, type StudentSchoolDesc, StudentSchoolDescSchema, type StudentSchoolEntity, StudentSchoolEntitySchema, type StudentSchoolPayload, StudentSchoolPayloadSchema, StudentSchoolSchema, type StudentSchoolUploadPayload, StudentSchoolUploadPayloadSchema, type StudentUpdatePayload, StudentUpdatePayloadSchema, type UserAcademy, UserAcademySchema, type UserRole, UserRoleSchema, type UserStudent, UserStudentSchema, type YoonbeeseoUser, type YoonbeeseoUserEntity, YoonbeeseoUserEntitySchema, YoonbeeseoUserSchema, academyQuery, adminRoles, adminRolesKor, initialAcademy, initialSchool, initialStudentSchool, lessonSorts, paymentMehods, relationships, schoolDescs, schoolSorts, schoolSortsKor, userRoles };
