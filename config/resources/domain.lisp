(in-package :mu-cl-resources)


(define-resource caretaker ()
    :class (s-prefix "schema:Person")
    :properties `((:name :string ,(s-prefix "schema:name")))
    :has-many `((animal :via ,(s-prefix "schema:knowsAbout")
                    :as "animals"))
    :resource-base (s-url "http://mu.semte.ch/application/zoo-foodmanager/caretakers/")
:on-path "caretakers")

(define-resource animal ()
    :class (s-prefix "schema:Thing")
    :properties `((:species :string ,(s-prefix "schema:name"))    
                  (:diet :string ,(s-prefix "schema:description")))
    :has-many `((caretaker :via ,(s-prefix "schema:knowsAbout")
                    :inverse t
                    :as "caretakers"))
    :resource-base (s-url "http://mu.semte.ch/application/zoo-foodmanager/animals/")
:on-path "animals")

